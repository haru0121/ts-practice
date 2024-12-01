import { bound } from "./decorator/bindThis.js";

// 配列とインデックスアクセス型を使用したユニオン型の作成
const TASK_STATUS = ["todo", "working", "done"] as const; // readonly
type TaskStatus = (typeof TASK_STATUS)[number]; // インデックスアクセス型

interface Task {
  title: string;
  description?: string;
}

class TaskForm {
  element: HTMLFormElement;
  titleInputEl: HTMLInputElement;
  descriptionInputEl: HTMLInputElement;

  constructor() {
    // form要素を取得
    this.element = document.querySelector("#task-form")!;

    // input要素を取得
    this.titleInputEl = document.querySelector("#form-title")!;
    this.descriptionInputEl = document.querySelector("#form-description")!;

    // イベントリスナを設定
    this.bindEvents();
  }

  private makeNewTask(): Task {
    return {
      title: this.titleInputEl.value,
      description: this.descriptionInputEl.value,
    };
  }

  private clearInputs(): void {
    this.titleInputEl.value = "";
    this.descriptionInputEl.value = "";
  }

  @bound
  private submitHandler(event: Event) {
    event.preventDefault();

    // Taskオブジェクトの生成
    const task = this.makeNewTask();
    // TODO
    /**
     * 後ほど、Taskオブジェクトを使ってリストアイテムを作成する処理を実装
     */

    this.clearInputs();
  }

  // 入力フォームにイベントリスナを追加
  private bindEvents() {
    this.element.addEventListener("submit", this.submitHandler);
  }
}

class TaskList {
  templateEl: HTMLTemplateElement;
  element: HTMLDivElement;
  private taskStatus: TaskStatus;

  constructor(templateId: string, _taskStatus: TaskStatus) {
    // ターゲットのtemplate要素を取得
    this.templateEl = document.querySelector(templateId)!;

    // template要素を複製
    const clone = this.templateEl.content.cloneNode(true) as DocumentFragment;

    // template要素の子要素を取得
    this.element = clone.firstElementChild as HTMLDivElement;

    this.taskStatus = _taskStatus;

    this.setup();
  }

  mount(selector: string) {
    const targetEl = document.querySelector(selector)!;
    targetEl.insertAdjacentElement("beforeend", this.element);
  }

  setup() {
    this.element.querySelector("h2")!.textContent = `${this.taskStatus}`;
    // 挿入した要素の子要素のリストにidを設定
    this.element.querySelector("ul")!.id = `${this.taskStatus}`;
  }
}

// 入力フォームの生成
new TaskForm();

// タスクリストの生成
TASK_STATUS.forEach((status) => {
  const list = new TaskList("#task-list-template", status);
  list.mount("#container");
});

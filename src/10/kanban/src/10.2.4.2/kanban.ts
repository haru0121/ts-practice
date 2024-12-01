import { bound } from "./decorator/bindThis.js";

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

// 入力フォームの生成
new TaskForm();

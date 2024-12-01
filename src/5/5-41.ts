function fetchData(): string | null {
  return Math.random() ? "text" : null;
}

let data: string | null = fetchData();

// 非 null アサーションを使用して、dataがnullではないことを保証する
const processedData: string = data!;

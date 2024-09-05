type Result =
  | {
      error: false;
      value: number;
      message?: never;
    }
  | {
      error: true;
      message: string;
      value?: never;
    };


// type Result = ErrorResult | SuccessResult

// type ErrorResult ={
//   error:true;
//   message: string;
// }

// type SuccessResult ={
//   error:false;
//   value:number
// }


const sqrt = (input: number): Result => {
  if (input < 0) {
    // ✅ 想定通りのコード
    return { error: true, message: '負の数は受け付けません' };
  }
  if (input === 0) {
    // ❌ valueを含めていないためエラーにしてください
    return { error: false };
  }
  if (input === 1) {
    // ❌ 不要なプロパティを含めているためエラーにしてください
    return { error: false, value: 1, message: '√1 はちょうど1です' };
  }
  // ✅ 想定通りのコード
  return { error: false, value: Math.sqrt(input) };
};


sqrt(3);
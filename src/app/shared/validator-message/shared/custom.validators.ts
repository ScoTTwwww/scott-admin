import { ValidatorFn } from '@angular/forms';

export class CustomValidators {

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let config = {
      'required': '此欄位必須輸入值',
      'isNumber': '此欄位必須為數值',
      'maxValue': `此欄位最大值為 ${validatorValue.maxValue}`,
      'minValue': `此欄位最小值為 ${validatorValue.minValue}`,
      'maxLength': `此欄位最大長度為 ${validatorValue.requiredLength}`,
      'minlength': `此欄位最小長度為 ${validatorValue.requiredLength}`,
      'userAccount': '登入帳號以英文字母為開頭不分大小寫，請輸入6~20個英數字元組合，英文至少2碼及數字至少1碼，不得與他人重複',
      'userAccountExist': '此登入帳號已被使用，請重新輸入',
      'passwordNotSame': '密碼確認輸入錯誤',
      'password': '請輸入 8~20 個英數字元組合，區分大小寫，不得與登入帳號相同',
      'password_confirm': '請再次輸入登入密碼，須完全相同，勿使用複製貼上',
      'createError': '新增存檔失敗，請重新操作',
      'updateError': '編輯存檔失敗，請重新操作',
      'deleteError': '刪除失敗，請重新操作',
      'systemError': '系統發生錯誤，請重新操作，如果一直發生，請通知系統管理員！',
      'exchangePassword': '操作會員轉點功能時會確認轉點密碼，請輸入 4 個數字字元',
      'exchangePassword_confirm': '請再次輸入轉點密碼，須完全相同，勿使用複製貼上',
      'checkedType': '請勾選同意來進行轉點',
      'nickName': `${validatorValue.message}`,
      'nickNameSameError': '轉出帳戶與轉入主帳戶相同',
      'creditRangeOver': '輸入點數不可超主帳戶',
      'passwordError': '轉點密碼不正確',
      'inviteCodeNotExist': '推薦碼錯誤，請重新輸入',
      'nickNameExist': '遊戲暱稱已經存在',
      'phoneNo': '請輸入當地手機號碼，不需空格、+、( )、- 符號',
      'fullwidthText': '只能輸入半形數字',
      'userId': '請輸入登入帳號'
    };

    return config[validatorName] ? config[validatorName] : validatorName;
  }

  static isNumber(control) {
    const v = control.value;
    if (v != '' && isNaN(v)) {
      return { 'isNumber': true };
    }
    return null;
  }

  static maxValue(maxValue: number): ValidatorFn {
    return function (control) {
      const v = control.value;
      if (v != '' && parseFloat(v) > maxValue) {
        return { 'maxValue': { 'maxValue': maxValue, 'actualValue': v.value } };
      }
      return null;
    }
  }

  static minValue(minValue: number): ValidatorFn {
    return function (control) {
      const v = control.value;
      if (v != '' && parseFloat(v) < minValue) {
        return { 'minValue': { 'minValue': minValue, 'actualValue': v.value } };
      }
      return null;
    }
  }

  static userAccount(control) {
    const v = control.value;
    //[a-zA-Z]：以英文開頭
    //(?=.*\d)：至少一位數字
    //(?=.*[a-zA-Z])：至少一位英文字母
    //(?!.*[^a-zA-Z0-9])：不包含英文及數字以外的符號
    //.{5,19}：因為限定以英文開頭佔1位長度，所以，總長度是6-20
    const regexp = /^[a-zA-Z](?=.*\d)(?=.*[a-zA-Z])(?!.*[^a-zA-Z0-9]).{5,19}$/;
    if (!regexp.test(v)) {
      return { 'userAccount': true };
    }
    return null;
  }

  static passowrd(key: string = 'password') {
    return function (control) {
      const v = control.value;
      const regexp = /^(?=.*\d)(?=.*[a-zA-Z]).{8,20}$/;
      if (!regexp.test(v)) {
        return { [key]: true };
      }
      return null;
    }
  }

  static exchangePassword(key: string = 'exchangePassword') {
    return function (control) {
      const v = control.value;
      const regexp = /^([0-9]{4})$/;
      if (!regexp.test(v)) {
        return { [key]: true };
      }
      return null;
    }
  }

  static checkedType(control) {
    if (!control.value) {
      return { 'checkedType': true };
    }
    return null;
  }

  static nickName(control) {
    const v = control.value;
    const length: number = control.value.length;
    const chineseCount: number = v.split(/[\u4E00-\u9FA5\uF900-\uFA2D]/).length - 1;
    const enNumCount: number = v.split(/[\dA-Za-z_]/).length - 1;
    const specialCharacter: boolean = (chineseCount + enNumCount == length) ? false : true;
    const byte: number = chineseCount * 2 + enNumCount;
    if (specialCharacter) {
      return { 'nickName': { 'message': "內含特殊字元。" } };
    }
    else {
      if ((byte < 4 || byte > 8)) {
        return { 'nickName': { 'message': "遊戲中顯示暱稱代表玩家身份，請輸入 4~8 個英數、中文字元(中文視為 2 字元)，不得與登入帳號及他人重複，一經確認不得修改" } };
      }
    }
    return null;
  }

  static phoneNo(control) {
    const v = control.value;
    const regexp = /^[0-9]+$/;
    if (!regexp.test(v)) {
      return { 'phoneNo': true };
    }
    return null;
  }

  static fullwidthText(control) {
    const v = control.value;
    const regexp = /[^\x00-\xff]/;
    if (regexp.test(v)) {
      return { 'fullwidthText': true };
    }
    return null;
  }

  static userId(control) {
    const v = control.value;
    if (v == '') {
      return { 'userId': true };
    }
    return null;
  }
}

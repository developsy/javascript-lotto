const MissionUtils = require("@woowacourse/mission-utils");
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  makeLottoNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  makeLottoWinningNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 7);
  }

  checkUserMoney() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (userInput) => {
      this.countTimesOfLotto(userInput);
    });
  }
  countTimesOfLotto(money) {
    //상수화 필요
    return parseInt(money / 1000);
  }

  winningCheck(lottonumbers, winningNumbers, bonusNumber) {
    //상수화 필요
    const countOfCorrectNumbers = lottonumbers.filter((number) =>
      winningNumbers.includes(number)
    ).length;
    if (countOfCorrectNumbers === 3) return 5;
    if (countOfCorrectNumbers === 4) return 4;
    if (countOfCorrectNumbers === 5) return 3;
    if (countOfCorrectNumbers === 5 && lottonumbers.includes(bonusNumber)) return 2;
    if (countOfCorrectNumbers === 6) return 1;
  }
}

module.exports = Lotto;

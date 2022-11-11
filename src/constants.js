const VALUE_NUMBER = {
  SMALLEST_LOTTO_NUMBER: 1,
  BIGGEST_LOTTO_NUMBER: 45,
  TOTAL_LOTTO_NUMBERS: 6,
  MONEY_FOR_ONE_GAME: 1000,

  NUMBERS_OF_WIN_FIRST_PRIZE: 6,
  NUMBERS_OF_WIN_SECOND_PRIZE: 5,
  NUMBERS_OF_WIN_THIRD_PRIZE: 5,
  NUMBERS_OF_WIN_FOURTH_PRIZE: 4,
  NUMBERS_OF_WIN_FIFTH_PRIZE: 3,

  FIRST_PRIZE: 2000000000,
  SECOND_PRIZE: 30000000,
  THIRD_PRIZE: 1500000,
  FOURTH_PRIZE: 50000,
  FIFTH_PRIZE: 5000,
};

const GRADE = {
  FIRST_GRADE: 1,
  SECOND_GRADE: 2,
  THIRD_GRADE: 3,
  FOURTH_GRADE: 4,
  FIFTH_GRADE: 5,
};

const ERROR_INPUT = {
  NOT_NUMBER: "[ERROR] 숫자를 입력해 주세요.",
  UNDER_FOUR_LETTERS: "[ERROR] 4자리 이상의 숫자를 입력해 주세요.",
  NOT_THOUSAND_UNIT: "[ERROR] 1000원 단위의 금액을 입력해 주세요.",
  BONUS_NUMBER_OUT_OF_RANGE: "[ERROR] 보너스 숫자는 1-45 사이의 수여야 합니다.",
  BONUS_NUMBER_DUPLICATE: "[ERROR] 이전에 입력한 번호가 보너스 숫자와 중복됩니다.",
  WINNING_NUMBER_IS_NOT_VALID: "[ERROR] 숫자+',' 형태로 입력해 주세요. ex) 1,2,3,4,5,6",
};

const ERROR_LOTTO_NUMBER = {
  NOT_SIX: "[ERROR] 로또 번호는 6개여야 합니다.",
  DUPLICATE_NUMBER: "[ERROR] 중복되는 숫자가 있습니다.",
  OUT_OF_RANGE: "[ERROR] 숫자는 1-45 사이의 수여야 합니다.",
};

const GET_INPUT = {
  MONEY: "구입금액을 입력해 주세요.\n",
  WINNING_NUMBER: "당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
};

const RESULT = {
  BORDER_LINE: "---",
  RESULT_STATISTICS_MESSAGE: "당첨 통계",
  RESULT_STATISTICS_5TH: "3개 일치 (5,000원)",
  RESULT_STATISTICS_4TH: "4개 일치 (50,000원)",
  RESULT_STATISTICS_3RD: "5개 일치 (1,500,000원)",
  RESULT_STATISTICS_2ND: "5개 일치, 보너스 볼 일치 (30,000,000원)",
  RESULT_STATISTICS_1ST: "6개 일치 (2,000,000,000원)",
};

module.exports = { VALUE_NUMBER, GRADE, ERROR_INPUT, ERROR_LOTTO_NUMBER, GET_INPUT, RESULT };

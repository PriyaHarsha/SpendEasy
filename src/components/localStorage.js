export const saveToStorage = function (expenseslist) {
  window.localStorage.setItem("expenses", JSON.stringify(expenseslist));
};

export const getFromStorage = function () {
  const getExpenses = window.localStorage.getItem("expenses");

  return getExpenses ? JSON.parse(getExpenses) : [];
};

export const saveCreditToStorage = function (creditlist) {
  window.localStorage.setItem("credits", JSON.stringify(creditlist));
};

export const getCreditFromStorage = function () {
  const getCredits = window.localStorage.getItem("credits");

  return getCredits ? JSON.parse(getCredits) : [];
};

export const saveLimitToStorage = function (limit) {
  window.localStorage.setItem("limit", JSON.stringify(limit));
};

export const getLimitFromStorage = function () {
  const getLimit = window.localStorage.getItem("limit");

  return getLimit ? JSON.parse(getLimit) : 0;
};

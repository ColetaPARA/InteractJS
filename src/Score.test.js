const Score = require("./Score");

test("Pontuação não pode ser menor que 0", () => {
  const score = new Score();

  score.lose_score(100);
  expect(score.current).toBe(0);
});

test("GANHAR pontos a partir do valor absoluto", () => {
  const score = new Score();

  score.earn_score(-1);
  expect(score.current).toBe(1);
});

test("PEDER pontos a partir do valor absoluto", () => {
  const score = new Score(100);

  score.lose_score(-1);
  expect(score.current).toBe(99);
});

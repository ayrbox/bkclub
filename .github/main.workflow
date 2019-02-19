workflow "New workflow" {
  on = "push"
  resolves = ["Run ESLint"]
}

action "Run ESLint" {
  uses = "stefanoeb/eslint-action@1.0.0"
}

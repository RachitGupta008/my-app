module.exports = {
  branches: "master",
  repository_url: "https://github.com/RachitGupta008/my-app",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    "@semantic-release/git",
  ],
};

// Name:Unix command line `ls -l` extract the file type.
// Link:https://www.codewars.com/kata/5822b65bb81f702016000026/train/javascript
// Solution:https://www.codewars.com/kata/5822b65bb81f702016000026/solutions/javascript

function linuxType(fileAttribute) {
  const rules = {
    "-": "file",
    d: "directory",
    l: "symlink",
    c: "character_file",
    b: "block_file",
    p: "pipe",
    s: "socket",
    D: "door",
  };

  return rules[fileAttribute[0]];
}

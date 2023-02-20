export const solveAssetPath = (
  data: {
    [x: string]: string;
  },
  fileName: string
) => {
  const solvedPath = data[fileName];
  if (!solvedPath) console.warn(`${fileName}のパスが解決しません`);
  return solvedPath || fileName;
};

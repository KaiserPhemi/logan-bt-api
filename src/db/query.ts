/**
 * @desc
 * @param dbTable string
 */
export const selectAll = (dbTable: string): string => {
  return `select * from ${dbTable};`;
};

/* istanbul ignore file */

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme Shallow Wrapper
 * @param {string} val - Value of data-test attribute to search for
 * @returns {ShallowWrapper} 
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}


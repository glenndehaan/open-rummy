/**
 * Export the array utils
 */
export default {
    /**
     * Check if an array has duplicates
     *
     * @param array
     * @returns {boolean}
     */
    checkForDuplicates(array) {
        return new Set(array).size !== array.length;
    }
};

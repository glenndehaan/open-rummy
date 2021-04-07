/**
 * Export the update utils
 */
export default {
    /**
     * Update the archival storage. win switches from single value to multi value
     *
     * @param storage
     */
    0: (storage) => {
        const archive = storage.get('archive');

        for(let item = 0; item < archive.length; item++) {
            const archiveItem = archive[item];

            if(!Array.isArray(archiveItem.game.win)) {
                archiveItem.game.win = [archiveItem.game.win];
            }
        }

        storage.set('archive', archive);
    }
};

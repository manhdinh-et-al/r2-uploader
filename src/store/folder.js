import { defineStore } from "pinia";

export const useFolderStore = defineStore("folder-list", {
  state: () => ({
    folderList: [],
  }),

  getters: {
    getFolderList: (state) => state.folderList,
  },

  actions: {
    updateFolderList(newValue) {
      this.folderList = newValue;
    },
  },
});

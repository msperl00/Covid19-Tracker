import { defineStore } from "pinia";
import { computed } from "vue";

// the first argument is a unique id of the store across your application
export const useSideBarStore = defineStore('sidebarMap',{ 
    state: () => {

        let visibility = false;
        let  measures =  {width: 180, colapsed: 38};
        const isVisible = computed( () => { 
            `${visibility ? measures.width : measures.colapsed}`
        })
        return { 
            visibility,
            measures: {witdh: 180, colapsed: 38},
            isVisible
        }
    },
    actions: { 
        toggleSideBar() {
            this.visibility = !this.visibility;
            return this.visibility;
        }
    }
});
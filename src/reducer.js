let lastId = 0;

export default function reducer(state = [], action) {
    switch (action.type) {
        case "bugAdded":    
          return [
            ...state,
            {
              id: ++lastId,
              description: action.playload.description,
              resolved: false
            }
          ];
        case "bugRemoved":
          return state.filter(bug => bug.id != action.playload.id);
        default: 
        return state;
    }
}

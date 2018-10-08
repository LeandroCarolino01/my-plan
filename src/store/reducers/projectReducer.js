const initState = {
    projects: [
        {id:'1', title: 'Read a book a month', content: 'all topics'},
        {id:'2', title: 'learn anything new', content: 'doesnt matter'},
        {id:'3', title: 'eat healthy', content: 'lots of vegetables'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer
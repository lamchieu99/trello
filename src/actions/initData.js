export const initData = {
    boards: [
        {
            id: 'board-1',
            columnOrder: ['column-1', 'column-2', 'column-3'],
            columns: [
                {
                    id: 'column-1',
                    boardId: 'board-1',
                    title: 'To do column',
                    taskOrder: [
                        'task-3', 'task-2', 'task-1'
                    ],
                    tasks: [
                        { id: 'task-1', boardId: 'board-1', columnId: 'column-1', title: 'Title of task 1', cover: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg' },
                        { id: 'task-2', boardId: 'board-1', columnId: 'column-1', title: 'Title of task 2', cover: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg' },
                        { id: 'task-3', boardId: 'board-2', columnId: 'column-1', title: 'Title of task 3', cover: null },
                        { id: 'task-4', boardId: 'board-3', columnId: 'column-1', title: 'Title of task 4', cover: null }
                    ]
                },
                {
                    id: 'column-2',
                    boardId: 'board-1',
                    title: 'Improgress column',
                    taskOrder: [
                        'task-4', 'task-5', 'task-6'
                    ],
                    tasks: [
                        { id: 'task-4', boardId: 'board-1', columnId: 'column-1', title: 'Title of task 4', cover: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg' },
                        { id: 'task-5', boardId: 'board-2', columnId: 'column-1', title: 'Title of task 5', cover: null },
                        { id: 'task-6', boardId: 'board-3', columnId: 'column-1', title: 'Title of task 6', cover: null }
                    ]
                },
                {
                    id: 'column-3',
                    boardId: 'board-1',
                    title: 'Done column',
                    taskOrder: [
                        'task-7', 'task-8', 'task-9'
                    ],
                    tasks: [
                        { id: 'task-7', boardId: 'board-1', columnId: 'column-1', title: 'Title of task 7', cover: null },
                        { id: 'task-8', boardId: 'board-2', columnId: 'column-1', title: 'Title of task 8', cover: null },
                        { id: 'task-9', boardId: 'board-3', columnId: 'column-1', title: 'Title of task 9', cover: null }
                    ]
                }
            ]
        }
    ]
}
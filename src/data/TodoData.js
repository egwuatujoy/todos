const todoLists = [
  {
    id: 1, // Or use a UUID generator for truly unique IDs
    title: "Grocery Shopping",
    tasks: [
      { id: 1, description: "Milk", completed: false },
      { id: 2, description: "Eggs", completed: true },
      { id: 3, description: "Bread", completed: false },
    ],
  },
  {
    id: 2,
    title: "Work Projects",
    tasks: [
      { id: 1, description: "Finish report", completed: true },
      { id: 2, description: "Prepare presentation", completed: false },
    ],
  },
  // {
  //   id: 3,
  //   title: "Household Chores",
  //   tasks: [
  //     { id: 1, description: "Laundry", completed: false },
  //     { id: 2, description: "Clean kitchen", completed: true },
  //   ],
  // },
  // {
  //   id: 4,
  //   title: "Personal Errands",
  //   tasks: [
  //     { id: 1, description: "Dry cleaning", completed: false },
  //     { id: 2, description: "Bookstore", completed: false },
  //   ],
  // },
  // {
  //   id: 5,
  //   title: "Learning",
  //   tasks: [
  //     { id: 1, description: "React tutorial", completed: true },
  //     { id: 2, description: "JavaScript exercises", completed: false },
  //   ],
  // },
];

export default todoLists;

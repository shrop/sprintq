var randUserId = function() {
  var users = Meteor.users.find().fetch();
  var randomIndex = Math.floor(Math.random() * users.length);
  return users[randomIndex]._id;
};

var randPassword = function() {
  return Math.random().toString(36);
};

Meteor.startup(function () {
  if (Sprints.find().count() === 0) {

    var users = [
      {
        email: 'BobFranks@example.com',
        password: randPassword(),
        profile: {
          name: 'Bob Franks',
          avatar_url: 'https://avatars.githubusercontent.com/u/957951?v=2',
        },
      },
      {
        email: 'SarahBurger@example.com',
        password: randPassword(),
        profile: {
          name: 'Sarah Burger',
          avatar_url: 'https://avatars.githubusercontent.com/u/957951?v=2',
        },
      },
      {
        email: 'EdSandwich@example.com',
        password: randPassword(),
        profile: {
          name: 'Ed Sandwich',
          avatar_url: 'https://avatars.githubusercontent.com/u/957951?v=2',
        },
      }
    ];

    console.log(users);
/**
    for (var i = 0; i < users.length; i++) {
      Accounts.createUser(users[i]);
    }
**/
    console.log('Spawning sample sprints...');

    var sprints = [
      {
        title: 'SprintQ',
        issues: [
          {
            title: "Need to be able to edit sprint titles from the home page",
            difficulty: 2,
            claimedBy: 'none',
            closed: false,
            html_url: 'https://github.com/shrop/sprintq/issues/33'
          },
          {
            title: "Sort the sprints alphabetically on the home page",
            difficulty: 2,
            claimedBy: 'none',
            closed: true,
            closedBy: 'none',
            html_url: 'https://github.com/shrop/sprintq/issues/26'
          },
          {
            title: "Paginate the sprints on the home page",
            difficulty: 3,
            claimedBy: 'none',
            closed: true,
            closedBy: 'none',
            html_url: 'https://github.com/shrop/sprintq/issues/25'
          },
        ],
        // userId: randUserId()
      },
      {
        title: 'Praesent at sollicitudin nisi',
        issues: [
          {
            title: "Issue 1",
            difficulty: 1,
          },
          {
            title: "Issue 2",
            difficulty: 2,
          },
          {
            title: "Issue 3",
            difficulty: 3,
          },
        ],
      },
      {
        title: 'Fusce vel porttitor dui',
        issues: [
          {
            title: "Issue 1",
            difficulty: 1,
          },
          {
            title: "Issue 2",
            difficulty: 2,
          },
          {
            title: "Issue 3",
            difficulty: 3,
          },
        ],
      },
      {
        title: 'Curabitur et vulputate dolor',
        issues: [
          {
            title: "Issue 1",
            difficulty: 1,
          },
          {
            title: "Issue 2",
            difficulty: 2,
          },
          {
            title: "Issue 3",
            difficulty: 3,
          },
        ],
      },
      {
        title: 'Donec elementum tellus a magna bibendum',
        issues: [
          {
            title: "Issue 1",
            difficulty: 1,
          },
          {
            title: "Issue 2",
            difficulty: 2,
          },
          {
            title: "Issue 3",
            difficulty: 3,
          },
        ],
      },
      {
        title: 'Aenean et tortor pulvinar',
        issues: [
          {
            title: "Issue 1",
            difficulty: 1,
          },
          {
            title: "Issue 2",
            difficulty: 2,
          },
          {
            title: "Issue 3",
            difficulty: 3,
          },
        ]
      }
    ];

    for (i = 0; i < sprints.length; i++) {
      Sprints.insert(sprints[i]);
    }
  }
});

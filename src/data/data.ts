export type DataType = {
  title: string;
  isFolder?: boolean;
  items?: DataType[];
};

export const data: DataType[] = [
  {
    title: "root",
    isFolder: true,
    items: [
      {
        title: "public",
        isFolder: true,
        items: [
          {
            title: "Data",
            isFolder: true,
            items: [
              {
                title: "folderData.js",
                isFolder: false,
                items: [],
              },
            ],
          },
          {
            title: "index.html",
            isFolder: false,
            items: [],
          },
        ],
      },
      {
        title: "src",
        isFolder: true,
        items: [
          {
            title: "components",
            isFolder: true,
            items: [
              {
                title: "Folder.js",
                isFolder: false,
                items: [],
              },
            ],
          },
          {
            title: "App.js",
            isFolder: false,
            items: [],
          },
          {
            title: "index.js",
            isFolder: false,
            items: [],
          },
          {
            title: "styles.css",
            isFolder: false,
            items: [],
          },
        ],
      },
      {
        title: "package.json",
        isFolder: false,
        items: [],
      },
    ],
  },
];

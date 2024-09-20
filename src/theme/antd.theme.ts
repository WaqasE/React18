// Theme configuration
export const theme = {
  token: {
    fontrize: 14, // Example token
    colorPrimary: "#1B69FF", // Primary color
    colorSecondary: "#2960EC", // Secondary color
    fontFamily: "Inter", // Inter font family
  },
  components: {
    Typography: {
      fontSizeHeading1: 60,
      colorTextHeading: "#fff",
      colorText: "#fff",
      fontSizeLG: 16,
    },
    Button: {
      fontSize: 14,
      controlHeight: 40,
    },
    Table: {
      headerBg: "#F3F2F2",
    },
    Pagination: {
      itemActiveBg: "#1B69FF",
      colorPrimary: "#FFFFFF",
      backgroundColor: "#F3F2F2",
    },
    Select: {
      borderRadius: 2,
    },
    Input: {
      borderRadius: 2,
    },
    DatePicker: {
      borderRadius: 2,
    },
  },
};

// Function to get Ant Design theme
export const getAntdTheme = (appearance: string) => {
  if (appearance === "light") {
    return theme;
  } else {
    return {
      ...theme,
      components: {
        ...theme.components,
        Typography: {
          ...theme.components?.Typography,
          colorTextHeading: "black",
          colorText: "black",
        },
      },
    };
  }
};

// Custom token interface
export interface ICustomToken {
  textSlateColor: string;
  grayColor: string;
  darkGrayColor: string;
  lightSilverColor: string;
  lightGrayColor: string;
  blackColor: string;
}

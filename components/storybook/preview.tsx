import React from "react";
import type { Preview } from "@storybook/react";
import {
  Title,
  Description,
  Primary,
  Controls,
  Stories,
  DocsContext,
  DocsContextProps,
} from "@storybook/blocks";
import { Figma } from "@storybook/addon-designs/blocks";
import { Renderer } from "@storybook/types";

const breakpoints = {
  xs: "321px",
  sm: "767px",
  md: "960px",
  lg: "1280px",
  xl: "1440px",
};

type AttachedCSFFile = Partial<{
  attachedCSFFile: {
    meta: {
      parameters: {
        design: { url: string };
      };
    };
  };
}>;

const Page = () => {
  const context: DocsContextProps<Renderer> & AttachedCSFFile =
    React.useContext(DocsContext);
  const figmaUrl = context.attachedCSFFile?.meta?.parameters?.design?.url;
  return (
    <>
      <Title />
      <Description />
      <Primary />
      <Controls />
      {figmaUrl && (
        <Figma url={figmaUrl} style={{ position: "relative", zIndex: 0 }} />
      )}
      <Stories />
    </>
  );
};

const viewports: {
  [x: string]: { name: string; styles: { width: string; height: string } };
} = {};
Object.entries(breakpoints).forEach(([name, width]) => {
  const widthInt = parseInt(width.substring(0, width.indexOf("px")), 10);
  viewports[name] = {
    name,
    styles: {
      width,
      height: `${widthInt * 2}px`,
    },
  };
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      page: Page,
    },
    viewport: {
      viewports,
    },
  },
};

export default preview;

/// <reference types="react-scripts" />

declare module "*.mp3" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.pdf" {
  const src: string;
  export default src;
}

declare module "tag-canvas" {
  interface TagCanvasOptions {
    textColour?: string;
    fontSize?: number;
    outlineColour?: string;
    reverse?: boolean;
    depth?: number;
    maxSpeed?: number;
    weight?: boolean;
    zoom?: number;
    freezeActive?: boolean;
    shuffleTags?: boolean;
    outlineMethod?: string;
    textHeight?: number;
    wheelZoom?: boolean;
    fadeIn?: number;
  }

  interface TagCanvas {
    Start(canvasId: string, tagId: string, options?: TagCanvasOptions): void;
  }

  const tagCanvas: TagCanvas;
  export default tagCanvas;
}

declare module "react-icons/fa" {
  import { FC, SVGProps } from "react";
  
  interface IconProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
  }
  
  export const FaBars: FC<IconProps>;
  export const FaTimes: FC<IconProps>;
  export const FaSoundcloud: FC<IconProps>;
  export const FaGithub: FC<IconProps>;
  export const FaLinkedin: FC<IconProps>;
}

declare module "react-icons/fa6" {
  import { FC, SVGProps } from "react";
  
  interface IconProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
  }

  export const FaGithub: FC<IconProps>;
  export const FaLinkedin: FC<IconProps>;
  export const FaQuora: FC<IconProps>;
}
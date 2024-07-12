import {createContext, useContext} from "react"
import clsx from "clsx";
import tw from 'twrnc';
import React, { ReactNode } from "react";
import { TextInput, TextInputProps, View, Platform } from "react-native";
import { colors } from "@/styles/colors";

type Variants = "primary" | "secondary" | "tertiary";

type InputProps = {
  children: ReactNode;
  variant?: Variants;
} & TextInputProps;

function Input({ children, variant = "primary" }: InputProps) {
  return (
    <View style={tw.style(clsx(
      "w-full h-16 flex-row items-center gap-2",
      {
        "h-14 px-4 rounded-lg border border-zinc-800": variant !== "primary",
        "bg-zinc-950": variant === "secondary",
        "bg-zinc-900": variant === "tertiary"
      }
    ))}>
      {children}
    </View>
  );
}

function Field({ placeholder, ...rest }: TextInputProps) {
  return (
    <TextInput
      style={tw`flex-1 text-white pl-2`}
      placeholder={placeholder}
      placeholderTextColor={tw.color("text-gray-400")}
      cursorColor={colors.zinc[100]}
      selectionColor={Platform.OS === "ios" ? colors.zinc[100] : undefined}
      {...rest}
    />
  );
}

Input.Field = Field;

export { Input };

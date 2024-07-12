import {createContext, useContext} from "react"
import { TouchableOpacity, Text, TouchableOpacityProps, TextProps , ActivityIndicator} from "react-native"
import clsx from "clsx"
import tw from 'twrnc';

type Variants = "primary" | "secondary"

type ButtonProps =  TouchableOpacityProps & {
  variant?: Variants,
  isLoading?: boolean
}

const ThemeContext = createContext<{variant?: Variants}>({})

function Button({variant = "primary", children, isLoading, ...rest}: ButtonProps){
  return(
    <TouchableOpacity        
      style={tw.style(clsx("w-full h-11 flex-row items-center justify-center rounded-lg gap-2",
        {
          "bg-lime-300": variant === "primary",
          "bg-zinc-800": variant === "secondary"
        }
    ))}
      disabled={isLoading}
      {...rest}
      >
      <ThemeContext.Provider value={{variant}}>
        {isLoading ? <ActivityIndicator className="text-lime-950"/> : children}
      </ThemeContext.Provider>
    </TouchableOpacity>
  ) 
}

function Title({children}: TextProps){
  const { variant } = useContext(ThemeContext)
  return (
    <Text style={tw.style(clsx("text-base font-semibold", {
      "text-lime-950": variant === "primary",
      "text-zinc-200": variant === "secondary"
    }
      ))}
      >
      {children}
    </Text>
  )
}


Button.Title = Title

export {Button}
import * as React from 'react'

interface HomePageProps {
  profilePicUrl: string
  title: string
  subTitle: string
  descriptions: string[]
}

interface NavigationProps {
  email?: string
  linkedin?: string
  github?: string
  medium?: string
  twitter?: string
  stackoverflow?: string
}

export interface ElementComponents {
  p: React.FC
}

export interface LayoutComponents {
  Navigation: React.FC<NavigationProps>
  HomePage: React.FC<HomePageProps>
  SkillsPage: React.FC
  RolesPage: React.FC
  Education: React.FC
}

export interface UIContextComponents {
  layouts: LayoutComponents
  elements: ElementComponents
}

const UIContext = React.createContext<UIContextComponents>({} as UIContextComponents)

export { UIContext }

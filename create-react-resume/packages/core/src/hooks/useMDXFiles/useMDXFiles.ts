import * as React from 'react'

const useMDXFiles = (rolesMDXs: any) => {
  const [exps, setExps] = React.useState<any>([])

  const importModule = (pathname: string) => rolesMDXs[pathname]()
  const allPaths = Object.keys(rolesMDXs)

  const loader = allPaths.map(async (pathname: string) => {
    const { default: MDXComponent, ...other } = await importModule(pathname)
    return { MDXComponent, ...other }
  })

  const loadExperience = async () => {
    const modules = await loader
    Promise.all(modules).then(e => {
      setExps(e)
    })
  }

  React.useEffect(() => {
    loadExperience()
  }, [])

  return exps
}

export default useMDXFiles

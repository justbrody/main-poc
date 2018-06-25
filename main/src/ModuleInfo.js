
let modulesInfo = {}

modulesInfo['url-loader'] = fetchModuleInfo('url-loader')

export async function fetchModuleInfo (module, subModule) {
  if (!module) {
    return
  }

  let moduleKey = module + (subModule ? '/' + subModule : '')
  let moduleInfo = modulesInfo[moduleKey]

  if (!moduleInfo) {
    const response = await window.fetch(`/api/${module}${subModule ? '/' + subModule : ''}`)
    moduleInfo = await response.json()
    modulesInfo[moduleKey] = moduleInfo
  }

  return moduleInfo
}

export default modulesInfo

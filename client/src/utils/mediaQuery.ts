function checkMedia(px: string, size: string) {
    if (!window.matchMedia) {
        return false
    }
    if (window.matchMedia('(' + size + '-width: ' + px + 'px)').matches) {
        return true
    }
    return false
}
//@ts-ignore
const mediaQuery = (queries): any => {
    let result
    const isOK = Object.keys(queries).some((s) => {
        const px = s.indexOf('-') >= 0 ? s.split('-')[1] : s
        const size = s.indexOf('-') >= 0 ? s.split('-')[0] : 'max'
        const status = checkMedia(px, size)
        result = typeof queries[s] === 'function' ? queries[s]() : queries[s]
        return status
    })
    if (!isOK) {
        result = null
    }
    return result
}
//@ts-ignore
global.window.queries = mediaQuery

export default mediaQuery

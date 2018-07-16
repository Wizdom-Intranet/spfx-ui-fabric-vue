import { loadStyles } from '@microsoft/load-themed-styles';

let baseUrl = "https://spoprod-a.akamaihd.net/files/fabric/assets/icons"; // this is the baseUrl used by MS!
let scopeId = "f04906fd";
function GetIcon(name, unicode, bundle)
{
    // *please not, we manually scope the css
    return (resolve)=>{ //factory: https://vuejs.org/v2/guide/components-dynamic-async.html#Handling-Loading-State
        loadStyles(`
            @font-face{
                font-family:fabricmdl2icons${scopeId}${bundle};
                src: url(${baseUrl}/fabric-icons-${bundle}.woff) format("woff")
            }
            .ms-Icon[data-v-${scopeId}]{display:inline-block;font-style:normal;font-weight:400;speak:none}
            .ms-Icon--${name}[data-v-${scopeId}]:before{font-family:fabricmdl2icons${scopeId}${bundle}; content:"${unicode}"}
        `)
        resolve({template : `<i data-v-${scopeId} class='ms-Icon ms-Icon--${name}'></i>`});
    };
}

export let uiIconAdd = GetIcon("Add", "\uE710", "a13498cf");
export let uiIconCancel = GetIcon("Cancel", "\uE711", "a13498cf");
export let uiIconMore = GetIcon("More", "\uE712", "a13498cf");

export let uiIconFerry = GetIcon("Ferry", "\uE7E3", "1-a653c37c");
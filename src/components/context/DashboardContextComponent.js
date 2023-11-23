import React from 'react'
export const DashboardContext = React.createContext()
function DashboardContextComponent({children}) {
    let data = [
        {
          title:"ACTION",
          value:"Assign User",
          color:"primary",
          icon:"fa-user-plus",
          isProgress:false
        },
        {
          title:"ACTION",
          value:"Edit User",
          color:"success",
          icon:"fa-pen-to-square",
          isProgress:false
        },
        {
          title:"ACTION",
          value:"User Profile",
          color:"warning",
          icon:"fa-user",
          isProgress:false
        },
        {
          title:"ACTION",
          value:"Delete User",
          color:"danger",
          icon:"fa-trash",
          isProgress:false
        },
        {
          title:"ACTION",
          value:"Unassign User",
          color:"info",
          icon:"fa-user-minus",
          isProgress:false
        }
      ]
  return <DashboardContext.Provider value={{data}}>
    {children}
  </DashboardContext.Provider>
}

export default DashboardContextComponent
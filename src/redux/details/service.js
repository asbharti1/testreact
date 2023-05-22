
// asynch function Api() {
//   return fetch(apiUrl, {
//       method: 'GET',
//       headers: {
//           'Content-Type': 'application/json',

//       }
//   }).then(response => response.json())
//     .catch((error) => {throw error})
// }
// export default Api;

// class SitesApi {

// 	static async getAll () {
// 		return fetch(apiUrl, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
      
//             }
//         }).then(response => response.json())
//           .catch((error) => {throw error})
// 	}

// }

// export default SitesApi;



export const getApi = () => {
const apiUrl = 'https://raw.githubusercontent.com/amans2k/amans2k.github.io/master/users.json';
  return fetch(apiUrl, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',

    }
}).then(response => response.json())
  .catch((error) => {throw error})
 
};

import Settings from "./Settings";
import SystemApiCallSettings from "./SystemApiCallSettings";

export default class CommonCalls {

    /* GET API Calls */
    async getDocumentItems(userProps) {
        try {
            const res = await SystemApiCallSettings('GET', Settings.apiBaseUrl+'/sample_get_api', userProps);
            if (res.status === 200) {
                return res.data;
            } else { 
                return []; 
            }
        } catch (error) { 
            return [];  
        }
    };
 
    /* GET By ID Calls */ 
    async getDocumentItemsById(userProps, document_id) {
        try {
            const res = await SystemApiCallSettings('GET', Settings.apiBaseUrl+`/get_document_by_id/${document_id}`, userProps, false);
            if (res.status === 200) {
                return res.data;
            } else { 
                return {}; 
            }
        } catch (error) { 
            return {};  
        }
    };

    /* PUT API Calls */
    async updateDocumentById(userProps, document_id, payload) {
        try {
            const res = await SystemApiCallSettings('PUT', Settings.apiBaseUrl+`/sample_update_api/${document_id}`, userProps, false, payload);
            return res;
        } catch (error) { 
            return error;  
        }
    };

    /* POST API Calls */
    async addNewDocument(userProps, payload) {
        try {
            const res = await SystemApiCallSettings('POST', Settings.apiBaseUrl+`/sample_post_api`, userProps, false, payload);
            return res;
        } catch (error) { 
            return error;  
        }
    };

    /* Delete API Calls */
    async removeDocument(userProps, document_id) {
        try {
            const res = await SystemApiCallSettings('DELETE', Settings.apiBaseUrl+'/delete_document/'+document_id, userProps, false);
            return res;
        } catch (error) { 
            return error;
        }
    };
};
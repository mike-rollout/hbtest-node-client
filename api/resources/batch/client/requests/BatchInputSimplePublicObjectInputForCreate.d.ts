/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as RolloutApi from "../../../..";
/**
 * @example
 *     {
 *         inputs: [{
 *                 associations: [{
 *                         types: [{
 *                                 associationCategory: RolloutApi.AssociationSpecAssociationCategory.HubspotDefined,
 *                                 associationTypeId: 1
 *                             }],
 *                         to: {
 *                             id: "id"
 *                         }
 *                     }],
 *                 properties: {
 *                     "email": "bcooper@biglytics.net",
 *                     "phone": "(877) 929-0687",
 *                     "company": "Biglytics",
 *                     "website": "biglytics.net",
 *                     "lastname": "Cooper",
 *                     "firstname": "Bryan"
 *                 }
 *             }]
 *     }
 */
export interface BatchInputSimplePublicObjectInputForCreate {
    inputs: RolloutApi.SimplePublicObjectInputForCreate[];
}

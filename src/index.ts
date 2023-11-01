import {
	converter as assetTrackerReportedConverted,
	type nRFAssetTrackerReportedType,
} from '@nordicsemiconductor/asset-tracker-lwm2m'
import {
	converter as lwm2mConverted,
	type DeviceTwin,
} from '@nordicsemiconductor/asset-tracker-coiote-azure-lwm2m'
import { coiote } from './deviceTwin'


/**
 * Result Transformation example of usage
 */
const fromCoioteToAssetTrackerReported = (
	coiote: DeviceTwin,
): nRFAssetTrackerReportedType => {
	const lwm2m = lwm2mConverted(coiote)
	const nRFAssetTrackerReported = assetTrackerReportedConverted(lwm2m)
	return nRFAssetTrackerReported
}

console.log(fromCoioteToAssetTrackerReported(coiote))

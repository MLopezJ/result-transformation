# Result Transformation

## About

Demonstration of how
[Coiote to LwM2M](https://github.com/MLopezJ/coiote-to-LwM2M-asset-tracker-v2)
and
[Asset Tracker LwM2M](https://github.com/NordicSemiconductor/asset-tracker-lwm2m-js)
work together, with the intention of transforming format from `Coiote` to
`nRF Asset Tracker Reported`

## Mapping

| LwM2M ID                                                                                                                                        | Name                    | AssetTrackerv2 Firmware                                                                                                                         | Coiote-Azure                                                                                        | LwM2M Asset Tracker v2 | nRF Asset Tracker Reported                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ---------------------- | ---------------------------------------------------------------------------- |
| [3](https://github.com/OpenMobileAlliance/lwm2m-registry/blob/prod/version_history/3-1_1.xml)                                                   | Device                  | [3:1.2@1.1](https://github.com/OpenMobileAlliance/lwm2m-registry/blob/prod/version_history/3-1_2.xml)                                           | 3:1.2@1.1                                                                                           | 3:1.2@1.1              | [bat](https://github.com/NordicSemiconductor/asset-tracker-lwm2m-js/blob/v1.0.11/docs/battery.md), [dev](https://github.com/NordicSemiconductor/asset-tracker-lwm2m-js/blob/v1.0.11/docs/device.md), [roam](https://github.com/NordicSemiconductor/asset-tracker-lwm2m-js/blob/v1.0.11/docs/roaming.md) |
| [4](https://github.com/OpenMobileAlliance/lwm2m-registry/blob/prod/version_history/4-1_1.xml)                                                   | Connectivity Monitoring | [4:1.3@1.1](https://github.com/OpenMobileAlliance/lwm2m-registry/blob/prod/version_history/4-1_3.xml)                                           | 4:1.3@1.1                                                                                           | 4:1.3@1.1              | [roam](https://github.com/NordicSemiconductor/asset-tracker-lwm2m-js/blob/v1.0.11/docs/roaming.md)                                                    |
| [6](https://github.com/OpenMobileAlliance/lwm2m-registry/blob/prod/version_history/6-1_0.xml)                                                   | Location                | [6](https://github.com/OpenMobileAlliance/lwm2m-registry/blob/prod/version_history/6-1_0.xml)                                                   | 6                                                                                                   | 6                      | [gnss](https://github.com/NordicSemiconductor/asset-tracker-lwm2m-js/blob/v1.0.11/docs/gnss.md)                                                       |
| [3303](https://github.com/OpenMobileAlliance/lwm2m-registry/blob/prod/version_history/3303-1_1.xml)                                             | Temperature             | [3303:1.1](https://github.com/OpenMobileAlliance/lwm2m-registry/blob/prod/version_history/3303-1_1.xml)                                         | [3303](https://github.com/OpenMobileAlliance/lwm2m-registry/blob/prod/version_history/3303-1_0.xml) | 3303:1.1               | [env](https://github.com/NordicSemiconductor/asset-tracker-lwm2m-js/blob/v1.0.11/docs/environment.md)                                                 |
| [3304](https://github.com/OpenMobileAlliance/lwm2m-registry/blob/prod/version_history/3304-1_1.xml)                                             | Humidity                | [3304:1.1](https://github.com/OpenMobileAlliance/lwm2m-registry/blob/prod/version_history/3304-1_1.xml)                                         | [3304](https://github.com/OpenMobileAlliance/lwm2m-registry/blob/prod/version_history/3304-1_0.xml) | 3304:1.1               | [env](https://github.com/NordicSemiconductor/asset-tracker-lwm2m-js/blob/v1.0.11/docs/environment.md)                                                 |
| [3323](https://github.com/OpenMobileAlliance/lwm2m-registry/blob/prod/version_history/3323-1_1.xml)                                             | Pressure                | [3323:1.1](https://github.com/OpenMobileAlliance/lwm2m-registry/blob/prod/version_history/3323-1_1.xml)                                         | [3323](https://github.com/OpenMobileAlliance/lwm2m-registry/blob/prod/version_history/3323-1_0.xml) | 3323:1.1               | [env](https://github.com/NordicSemiconductor/asset-tracker-lwm2m-js/blob/v1.0.11/docs/environment.md)                                                 |
| [50009](https://github.com/nrfconnect/sdk-nrf/blob/v2.4.0/applications/asset_tracker_v2/src/cloud/lwm2m_integration/config_object_descript.xml) | Config                  | [50009](https://github.com/nrfconnect/sdk-nrf/blob/v2.4.0/applications/asset_tracker_v2/src/cloud/lwm2m_integration/config_object_descript.xml) | 50009                                                                                               | 50009                  | [cfg](https://github.com/NordicSemiconductor/asset-tracker-lwm2m-js/blob/v1.0.11/docs/config.md)                                                      |


Where "`:`" indicates the **object** version and "`@`" indicates the **LwM2M**
version. if not present, values will be the default option. Default **LwM2M**
version is `1.0`. Default **object** version is `1.0`.

## Installation

```
npm install --save-exact
```

## Running the tests

After cloning the repository:

```
npm ci
npm test
```

## Expected input

```ts
const coiote = {
  properties: {
    desired: {
      $metadata: {
        $lastUpdated: "2023-02-08T14:59:36.5459563Z",
      },
      $version: 1,
    },
    reported: {
      lwm2m: {
        "1": {
          "0": {
            "0": {
              value: 1,
            },
            "1": {
              value: 50,
            },
            "6": {
              value: false,
            },
            "7": {
              value: "U",
            },
            "16": {
              value: true,
            },
            "23": {
              value: false,
            },
          },
        },
        "3": {
          "0": {
            "0": {
              value: "Nordic Semiconductor ASA",
            },
            "1": {
              value: "Thingy:91",
            },
            "2": {
              value: "351358815340515",
            },
            "3": {
              value: "22.8.1+0",
            },
            "7": {
              "0": {
                value: 80,
              },
              attributes: {
                dim: "1",
              },
            },
            "11": {
              "0": {
                value: 0,
              },
              attributes: {
                dim: "1",
              },
            },
            "13": {
              value: 1675874731,
            },
            "16": {
              value: "UQ",
            },
            "19": {
              value: "3.2.1",
            },
          },
        },
        "4": {
          "0": {
            "0": {
              value: 6,
            },
            "1": {
              "0": {
                value: 6,
              },
              "1": {
                value: 7,
              },
              attributes: {
                dim: "2",
              },
            },
            "2": {
              value: -85,
            },
            "3": {
              value: 23,
            },
            "4": {
              "0": {
                value: "10.160.120.155",
              },
              attributes: {
                dim: "1",
              },
            },
            "8": {
              value: 34237196,
            },
            "9": {
              value: 2,
            },
            "10": {
              value: 242,
            },
            "12": {
              value: 12,
            },
          },
          attributes: {},
        },
        "6": {
          "0": {
            "0": { value: -43.5723 },
            "1": { value: 153.2176 },
            "2": { value: 2 },
            "3": { value: 24.798573 },
            "5": { value: 1665149633 },
            "6": { value: 5 },
          },
        },
        "3303": {
          "0": {
            "5700": {
              value: 15,
            },
          },
        },
        "3304": {
          "0": {
            "5700": {
              value: 30,
            },
          },
        },
        "3323": {
          "0": {
            "5601": {
              value: 101697,
            },
            "5602": {
              value: 101705,
            },
            "5700": {
              value: 10,
            },
            "5701": {
              value: "Pa",
            },
          },
        },
        "50009": {
          "0": {
            "0": {
              value: true,
            },
            "2": {
              value: 120,
            },
            "3": {
              value: 600,
            },
            "4": {
              value: 7200,
            },
            "1": {
              value: 60,
            },
            "5": {
              value: 8.5,
            },
            "6": {
              value: true,
            },
            "7": {
              value: true,
            },
            "8": {
              value: 2.5,
            },
            "9": {
              value: 0.5,
            },
          },
        },
      },
      $metadata: {
        $lastUpdated: "2023-08-18T14:39:11.9414162Z",
        lwm2m: {
          "3303": {
            "0": {
              "5700": {
                $lastUpdated: "2023-08-18T14:39:11.9414162Z",
                value: {
                  $lastUpdated: "2023-08-18T14:39:11.9414162Z",
                },
              },
              "5701": {
                $lastUpdated: "2023-08-18T14:39:11.9414162Z",
                value: {
                  $lastUpdated: "2023-08-18T14:39:11.9414162Z",
                },
              },
              $lastUpdated: "2023-08-18T14:39:11.9414162Z",
            },
            $lastUpdated: "2023-08-18T14:39:11.9414162Z",
          },
          "3304": {
            "0": {
              "5601": {
                $lastUpdated: "2023-07-07T12:11:03.0324459Z",
                value: {
                  $lastUpdated: "2023-07-07T12:11:03.0324459Z",
                },
              },
              "5602": {
                $lastUpdated: "2023-07-07T12:11:03.0324459Z",
                value: {
                  $lastUpdated: "2023-07-07T12:11:03.0324459Z",
                },
              },
              "5603": {
                $lastUpdated: "2023-07-07T12:11:03.0324459Z",
                value: {
                  $lastUpdated: "2023-07-07T12:11:03.0324459Z",
                },
              },
              "5604": {
                $lastUpdated: "2023-07-07T12:11:03.0324459Z",
                value: {
                  $lastUpdated: "2023-07-07T12:11:03.0324459Z",
                },
              },
              "5700": {
                $lastUpdated: "2023-07-07T12:11:03.0324459Z",
                value: {
                  $lastUpdated: "2023-07-07T12:11:03.0324459Z",
                },
              },
              "5701": {
                $lastUpdated: "2023-07-07T12:11:03.0324459Z",
                value: {
                  $lastUpdated: "2023-07-07T12:11:03.0324459Z",
                },
              },
              $lastUpdated: "2023-07-07T12:11:03.0324459Z",
            },
            $lastUpdated: "2023-07-07T12:11:03.0324459Z",
          },
          "3323": {
            "0": {
              "5601": {
                $lastUpdated: "2023-07-07T12:11:03.0324459Z",
                value: {
                  $lastUpdated: "2023-07-07T12:11:03.0324459Z",
                },
              },
              "5602": {
                $lastUpdated: "2023-07-07T12:11:03.0324459Z",
                value: {
                  $lastUpdated: "2023-07-07T12:11:03.0324459Z",
                },
              },
              "5603": {
                $lastUpdated: "2023-07-07T12:11:03.0324459Z",
                value: {
                  $lastUpdated: "2023-07-07T12:11:03.0324459Z",
                },
              },
              "5604": {
                $lastUpdated: "2023-07-07T12:11:03.0324459Z",
                value: {
                  $lastUpdated: "2023-07-07T12:11:03.0324459Z",
                },
              },
              "5700": {
                $lastUpdated: "2023-07-07T12:11:03.0324459Z",
                value: {
                  $lastUpdated: "2023-07-07T12:11:03.0324459Z",
                },
              },
              "5701": {
                $lastUpdated: "2023-07-07T12:11:03.0324459Z",
                value: {
                  $lastUpdated: "2023-07-07T12:11:03.0324459Z",
                },
              },
              $lastUpdated: "2023-07-07T12:11:03.0324459Z",
            },
            $lastUpdated: "2023-07-07T12:11:03.0324459Z",
          },
          $lastUpdated: "2023-08-18T14:39:11.9414162Z",
        },
      },
      $version: 31,
    },
  },
};
```

## Expected output

```ts
const assetTrackerReported = {
  bat: { v: 2754, ts: 1675874731000 },
  dev: {
    v: {
      imei: "351358815340515",
      modV: "22.8.1+0",
      brdV: "Nordic Semiconductor ASA",
    },
    ts: 1675874731000,
  },
  env: { v: { temp: 27.18, hum: 24.057, atmp: 10 }, ts: 1675874731000 },
  gnss: {
    v: {
      lng: 153.2176,
      lat: -43.5723,
      acc: 24.798573,
      alt: 2,
      spd: 0.579327,
    },
    ts: 1665149633000,
  },
  roam: {
    v: {
      nw: "6",
      rsrp: -85,
      area: 12,
      mccmnc: 24220,
      cell: 34237196,
      ip: "10.160.120.155",
    },
    ts: 1675874731000,
  },
  cfg: {
    loct: 120,
    act: true,
    actwt: 120,
    mvres: 600,
    mvt: 7200,
    accath: 8.5,
    accith: 2.5,
    accito: 0.5,
    nod: [],
  },
};
```

## Example

```ts
export const fromCoioteToAssetTrackerReported = (
  coiote: DeviceTwin,
): nRFAssetTrackerReportedType => {
  const lwm2m = lwm2mConverted(coiote);
  const nRFAssetTrackerReported = assetTrackerReportedConverted(lwm2m);
  return nRFAssetTrackerReported;
};
```

See [./src/example.ts](./src/example.ts) for more.

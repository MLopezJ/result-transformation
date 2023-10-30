# Result Transformation

## About

Demonstration of how [Coiote to LwM2M](https://github.com/MLopezJ/coiote-to-LwM2M-asset-tracker-v2) and [Asset Tracker LwM2M](https://github.com/NordicSemiconductor/asset-tracker-lwm2m-js) work together, with the intention of transforming format from `Coiote` to `nRF Asset Tracker Reported`

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

### Expected output

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

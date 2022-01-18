const exposes = require('../lib/exposes');
const reporting = require('../lib/reporting');
const extend = require('../lib/extend');
const e = exposes.presets;

module.exports = [
    {
        fingerprint: [{modelID: 'TS011F', manufacturerName: '_TZ3000_o005nuxx'}],
        model: 'SM-SO306EZ-10',
        vendor: 'UseeLink',
        description: '4 gang switch, with USB',
        exposes: [e.switch().withEndpoint('l1'), e.switch().withEndpoint('l2'), e.switch().withEndpoint('l3'),
            e.switch().withEndpoint('l4'), e.switch().withEndpoint('l5')],
        extend: extend.switch(),
        meta: {multiEndpoint: true},
        configure: async (device, coordinatorEndpoint, logger) => {
            for (const ID of [1, 2, 3, 4, 5]) {
                await reporting.bind(device.getEndpoint(ID), coordinatorEndpoint, ['genOnOff']);
            }
        },
        endpoint: (device) => {
            return {'l1': 1, 'l2': 2, 'l3': 3, 'l4': 4, 'l5': 5};
        },
    },
    {
        fingerprint: [{modelID: 'TS011F', manufacturerName: '_TZ3000_cfnprab5'}],
        model: 'SM-SO301AZ',
        vendor: 'UseeLink',
        description: '4 gang switch, with USB',
        extend: extend.switch(),
        exposes: [e.switch().withEndpoint('l1'), e.switch().withEndpoint('l2'),
            e.switch().withEndpoint('l3'), e.switch().withEndpoint('l4'), e.switch().withEndpoint('l5')],
        meta: {multiEndpoint: true},
        endpoint: (device) => {
            return {l1: 1, l2: 2, l3: 3, l4: 4, l5: 5};
        },
        configure: async (device, coordinatorEndpoint, logger) => {
            await reporting.bind(device.getEndpoint(1), coordinatorEndpoint, ['genOnOff']);
            await reporting.bind(device.getEndpoint(2), coordinatorEndpoint, ['genOnOff']);
            await reporting.bind(device.getEndpoint(3), coordinatorEndpoint, ['genOnOff']);
            await reporting.bind(device.getEndpoint(4), coordinatorEndpoint, ['genOnOff']);
            await reporting.bind(device.getEndpoint(5), coordinatorEndpoint, ['genOnOff']);
        },
    },

    {
        fingerprint: [{modelID: 'TS011F', manufacturerName: '_TZ3000_tvuarksa'}],
        model: 'SM-AZ713',
        vendor: 'UseeLink',
        description: 'Smart water/gas valve',
        extend: extend.switch(),
    },
];

const kvarry = [
    {key: 1, vlaue: 10},
    {key: 2, vlaue: 20}
];

const reformatted = kvarry.map(
    ({key, vlaue}) => ({[key]: vlaue})
);
console.log(reformatted);
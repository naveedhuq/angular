let message;
message = 'avc';
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');
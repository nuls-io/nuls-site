export function toThousands(num: string | number) {
  if (!num) return num + '';
  const N = num.toString().split('.');
  const int = N[0];
  const float = N[1] ? '.' + N[1] : '';
  return int.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') + float;
}

export function fixNumber(str: string | number, fix = 8) {
  str = '' + str;
  const int = str.split('.')[0];
  let float = str.split('.')[1];
  if (!float || !Number(float)) return int;
  float = float.slice(0, fix).replace(/(0+)$/g, '');
  return Number(float) ? int + '.' + float : int;
}
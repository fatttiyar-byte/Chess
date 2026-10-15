// خانه‌های صفحه شطرنج
function Square({
  position, //موقعیت
  isLight, //روشن و تیره بودن
  isSelected, //وضعیت انتخاب
  isHint, //راهنمایی
  isCheck, //کیش
  isLegalTarget, //مقصد مجاز
  onClick, //کلیک
}) {
  let color = isLight ? '#E8D5B5' : '#806044';
  let emissive = '#000000'; // رن پیش فرض درخشندگی  خود متریال
  let intensity = 0; //شدت درخشش

  if (isCheck) {
    color = '#ef4444';
    emissive = '#ef4444';
    intensity = 0.45;
  } else if (isSelected) {
    color = '#facc15';
    emissive = '#facc15';
    intensity = 0.35;
  } else if (isHint) {
    color = '#38bdf8';
    emissive = '#38bdf8';
    intensity = 0.35;
  } else if (isLegalTarget) {
    color = isLight ? '#b8d9b0' : '#638f59';
  }

  return (
    <mesh position={position} onClick={onClick}>
      <boxGeometry args={[1, 0.1, 1]} />
      {/* مکعب مسطح ..هر خانه یک مکعب با ابعاد 1×0.1×1 است (ضخامت 0.1)*/}
      <meshStandardMaterial
        color={color}
        emissive={emissive}
        emissiveIntensity={intensity}
        roughness={0.65}
      />
    </mesh>
  );
}

export default Square;
function Piece({
  // مهره‌های سه‌بعدی
  type,
  color,
  position,
  isSelected,
  onClick,
}) {
  const isWhite = color === 'w';
  const mainColor = isWhite ? '#f5f0e8' : '#20202a';
  const accentColor = isWhite ? '#d6cbb9' : '#77778a';

  const materialProps = {
    //متریال مشترک
    color: mainColor,
    emissive: isSelected ? '#60a5fa' : '#000000',
    emissiveIntensity: isSelected ? 0.55 : 0,
    roughness: 0.3, //سطح زبر
    metalness: 0.25, //کمی فلزی بودن
  };

  const baseY = 0.15;
  //هر مهره یه پایه استوانه ای مشترک داره

  return (
    <group position={position} onClick={onClick}>
      {/* پایه مشترک مهره */}
      <mesh position={[0, baseY, 0]} castShadow>
        <cylinderGeometry args={[0.28, 0.34, 0.13, 32]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>

      {type === 'p' && (
        //مهره پیاده یا سرباز
        <>
          <mesh position={[0, 0.35, 0]} castShadow>
            <cylinderGeometry args={[0.17, 0.23, 0.3, 32]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
          <mesh position={[0, 0.56, 0]} castShadow>
            <sphereGeometry args={[0.19, 24, 24]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
        </>
      )}

      {type === 'r' && (
        //رخ
        <>
          <mesh position={[0, 0.4, 0]} castShadow>
            <cylinderGeometry args={[0.24, 0.27, 0.4, 32]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
          <mesh position={[0, 0.65, 0]} castShadow>
            <cylinderGeometry args={[0.31, 0.28, 0.13, 32]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
          {[
            [-0.19, -0.19],
            [0.19, -0.19],
            [-0.19, 0.19],
            [0.19, 0.19],
          ].map(([x, z], index) => (
            <mesh
              key={index}
              position={[x, 0.76, z]}
              castShadow
            >
              <boxGeometry args={[0.11, 0.12, 0.11]} />
              <meshStandardMaterial {...materialProps} />
            </mesh>
          ))}
        </>
      )}

      {type === 'n' && (
        //اسب
        <>
          <mesh
            position={[0, 0.43, 0]}
            rotation={[0.2, 0, -0.15]}
            castShadow
          >
            <boxGeometry args={[0.3, 0.48, 0.34]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
          <mesh
            position={[0, 0.68, 0.12]}
            rotation={[0.35, 0, 0]}
            castShadow
          >
            <boxGeometry args={[0.24, 0.27, 0.25]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
          <mesh position={[0, 0.72, 0.25]}>
            <sphereGeometry args={[0.035, 12, 12]} />
            <meshStandardMaterial color={accentColor} />
          </mesh>
        </>
      )}

      {type === 'b' && (
        //فیل
        <>
          <mesh position={[0, 0.42, 0]} castShadow>
            <coneGeometry args={[0.25, 0.5, 32]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
          <mesh position={[0, 0.7, 0]} castShadow>
            <sphereGeometry args={[0.14, 24, 24]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
          <mesh position={[0, 0.86, 0]}>
            <sphereGeometry args={[0.045, 16, 16]} />
            <meshStandardMaterial color="#facc15" metalness={0.8} />
          </mesh>
        </>
      )}

      {type === 'q' && (
        //وزیر
        <>
          <mesh position={[0, 0.43, 0]} castShadow>
            <cylinderGeometry args={[0.2, 0.29, 0.45, 32]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
          <mesh position={[0, 0.7, 0]} castShadow>
            <cylinderGeometry args={[0.3, 0.22, 0.13, 32]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
          <mesh position={[0, 0.84, 0]} castShadow>
            <sphereGeometry args={[0.14, 24, 24]} />
            <meshStandardMaterial
              color={isWhite ? '#facc15' : '#c4b5fd'}
              metalness={0.75}
              roughness={0.2}
            />
          </mesh>
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const angle = (i / 6) * Math.PI * 2;
            return (
              <mesh
                key={i}
                position={[
                  Math.cos(angle) * 0.27,
                  0.78,
                  Math.sin(angle) * 0.27,
                ]}
              >
                <sphereGeometry args={[0.045, 12, 12]} />
                <meshStandardMaterial
                  color={isWhite ? '#facc15' : '#c4b5fd'}
                  metalness={0.8}
                />
              </mesh>
            );
          })}
        </>
      )}

      {type === 'k' && (
        //شاه
        <>
          <mesh position={[0, 0.45, 0]} castShadow>
            <cylinderGeometry args={[0.23, 0.31, 0.5, 32]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
          <mesh position={[0, 0.73, 0]} castShadow>
            <cylinderGeometry args={[0.31, 0.25, 0.13, 32]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
          <mesh position={[0, 0.93, 0]} castShadow>
            <boxGeometry args={[0.075, 0.3, 0.075]} />
            <meshStandardMaterial color="#facc15" metalness={0.8} />
          </mesh>
          <mesh position={[0, 0.95, 0]} castShadow>
            <boxGeometry args={[0.22, 0.065, 0.065]} />
            <meshStandardMaterial color="#facc15" metalness={0.8} />
          </mesh>
        </>
      )}
    </group>
  );
}

export default Piece;
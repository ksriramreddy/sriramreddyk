import matplotlib.pyplot as plt
import numpy as np

# Define two perpendicular (orthogonal) vectors
v1 = np.array([2, 0])
v2 = np.array([0, 2])  # Clearly perpendicular

# Dot product should be zero
dot = np.dot(v1, v2)

# Plotting
plt.figure(figsize=(6,6))
plt.quiver(0, 0, v1[0], v1[1], angles='xy', scale_units='xy', scale=1, color='r', label='v1')
plt.quiver(0, 0, v2[0], v2[1], angles='xy', scale_units='xy', scale=1, color='b', label='v2')
plt.xlim(-3, 3)
plt.ylim(-3, 3)
plt.axhline(0, color='grey', lw=0.5)
plt.axvline(0, color='grey', lw=0.5)
plt.gca().set_aspect('equal')
plt.grid(True)
plt.title(f"Orthogonal Vectors (Dot Product = {dot})")
plt.legend()
plt.show()

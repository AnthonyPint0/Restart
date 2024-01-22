import tkinter as tk
from tkinter import ttk
import pywhatkit

def download_videos():
    video_url = entry_url.get()
    quantity = combo_quantity.get()

    try:
        quantity = int(quantity)
        if 1 <= quantity <= 10:
            for _ in range(quantity):
                pywhatkit.playonyt(video_url)
        else:
            result_var.set("Quantity should be between 1 and 10.")
    except ValueError:
        result_var.set("Invalid quantity. Please enter a number.")

# GUI setup
root = tk.Tk()
root.title("YouTube Video Downloader")

# Entry for YouTube URL
label_url = tk.Label(root, text="YouTube URL:")
label_url.pack()

entry_url = tk.Entry(root, width=40)
entry_url.pack()

# Combo box for quantity
label_quantity = tk.Label(root, text="Quantity:")
label_quantity.pack()

quantity_options = [str(i) for i in range(1, 11)]
combo_quantity = ttk.Combobox(root, values=quantity_options, state="readonly")
combo_quantity.set(quantity_options[0])
combo_quantity.pack()

# Button to start download
button_download = tk.Button(root, text="Download", command=download_videos)
button_download.pack()

# Result label
result_var = tk.StringVar()
label_result = tk.Label(root, textvariable=result_var)
label_result.pack()

# Run the GUI
root.mainloop()

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Audio;

public class SettingsMenu : MonoBehaviour
{
    public AudioMixer mixer;
    public Slider BGMSlider;
    public Slider SFXSlider;
    // Start is called before the first frame update
    void Start()
    {
        BGMSlider.value = PlayerPrefs.GetFloat("BGM", 1f);
        SFXSlider.value = PlayerPrefs.GetFloat("SFX", 1f);
    }
    public void Apply(){
        PlayerPrefs.SetFloat("BGM", BGMSlider.value);
        PlayerPrefs.SetFloat("SFX", SFXSlider.value);
        SetVolume();
    }
    public void ChangeBGM(){
        float volume = LinearToDecibel(BGMSlider.value);
        mixer.SetFloat("BGMVolume", volume);
    }
    public void ChangeSFX(){
        float volume = LinearToDecibel(SFXSlider.value);
        mixer.SetFloat("SFXVolume", volume);
    }
    public void SetVolume(){
        mixer.SetFloat("BGMVolume", LinearToDecibel(PlayerPrefs.GetFloat("BGM", 1f)));
        mixer.SetFloat("SFXVolume", LinearToDecibel(PlayerPrefs.GetFloat("SFX", 1f)));
        BGMSlider.value = PlayerPrefs.GetFloat("BGM", 1f);
        SFXSlider.value = PlayerPrefs.GetFloat("SFX", 1f);
    }
    private float LinearToDecibel(float linear)
    {
        float dB;

        if (linear != 0)
        {
            dB = 20.0f * Mathf.Log10(linear);
        }
        else
        {
            dB = -144.0f;
        }

        return dB;
    }
}

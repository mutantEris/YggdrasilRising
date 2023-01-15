using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GravityOff : MonoBehaviour
{
public void GravityNo()
    {
        Physics.gravity = new Vector3(0, 0, 0);
    }
public void GravityYes()
    {
        Physics.gravity = new Vector3(0, -32, 0);
    }

}

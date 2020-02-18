<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Da_la_person extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table = 'la_person';

    protected $fillable = [
        'lap_id', 'lap_fname', 'lap_lname', 'lap_nname', 'lap_pfname_id', 'lap_timestamp'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];

    public $timestamps = false;
}

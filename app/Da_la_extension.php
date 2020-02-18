<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Da_la_extension extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table = 'la_extension';

    protected $fillable = [
        'lae_id', 'lae_descript', 'lae_timestamp',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];

    public $timestamps = false;
}
